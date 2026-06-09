/**
 * AscendC Guide - Interactive Quiz System
 * Supports both single-choice and multiple-choice questions
 */

function renderQuiz(containerId, questions) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let score = 0;
  let answered = 0;
  const total = questions.length;

  let html = '<div class="quiz-container">';
  html += '<div class="quiz-header">';
  html += '<h2>📝 本章习题</h2>';
  html += '<p class="quiz-subtitle">来检验一下你的学习成果吧！</p>';
  html += '<div class="quiz-score" id="' + containerId + '-score">得分：0 / ' + total + '</div>';
  html += '</div>';

  questions.forEach(function(q, qi) {
    const isMultiple = Array.isArray(q.answer);
    html += '<div class="quiz-question" id="' + containerId + '-q' + qi + '">';
    html += '<div class="quiz-q-text">' + (qi + 1) + '. ' + q.question;
    if (isMultiple) {
      html += ' <span class="quiz-multiple-hint">（多选题）</span>';
    }
    html += '</div>';
    html += '<div class="quiz-options">';
    q.options.forEach(function(opt, oi) {
      if (isMultiple) {
        html += '<label class="quiz-option quiz-option-multiple" data-qi="' + qi + '" data-oi="' + oi + '">';
        html += '<input type="checkbox" class="quiz-checkbox" data-qi="' + qi + '" data-oi="' + oi + '">';
        html += '<span class="quiz-option-label">' + String.fromCharCode(65 + oi) + '</span>';
        html += '<span class="quiz-option-text">' + opt + '</span>';
        html += '</label>';
      } else {
        html += '<button class="quiz-option" data-qi="' + qi + '" data-oi="' + oi + '" onclick="checkAnswer(\'' + containerId + '\',' + qi + ',' + oi + ')">';
        html += '<span class="quiz-option-label">' + String.fromCharCode(65 + oi) + '</span>';
        html += '<span class="quiz-option-text">' + opt + '</span>';
        html += '</button>';
      }
    });
    html += '</div>';
    if (isMultiple) {
      html += '<button class="quiz-submit-btn" data-qi="' + qi + '" onclick="checkMultipleAnswer(\'' + containerId + '\',' + qi + ')">提交答案</button>';
    }
    html += '<div class="quiz-feedback" id="' + containerId + '-fb' + qi + '"></div>';
    html += '</div>';
  });

  html += '<div class="quiz-result" id="' + containerId + '-result" style="display:none">';
  html += '<div class="quiz-result-text"></div>';
  html += '<button class="quiz-retry-btn" onclick="retryQuiz(\'' + containerId + '\')">🔄 再来一次</button>';
  html += '</div>';
  html += '</div>';

  container.innerHTML = html;

  // Store quiz data on the container element
  container._quizData = questions;
  container._quizScore = 0;
  container._quizAnswered = 0;
  container._quizAnsweredSet = new Set();
}

function checkAnswer(containerId, qi, oi) {
  const container = document.getElementById(containerId);
  if (!container || container._quizAnsweredSet.has(qi)) return;

  const questions = container._quizData;
  const q = questions[qi];
  const correct = q.answer;
  const isCorrect = oi === correct;

  container._quizAnsweredSet.add(qi);
  container._quizAnswered++;

  if (isCorrect) {
    container._quizScore++;
  }

  // Update option styles
  const qDiv = document.getElementById(containerId + '-q' + qi);
  const buttons = qDiv.querySelectorAll('.quiz-option');
  buttons.forEach(function(btn, idx) {
    btn.classList.add('quiz-option-disabled');
    if (idx === correct) {
      btn.classList.add('quiz-option-correct');
    } else if (idx === oi && !isCorrect) {
      btn.classList.add('quiz-option-wrong');
    }
  });

  // Show feedback
  const fb = document.getElementById(containerId + '-fb' + qi);
  if (isCorrect) {
    fb.innerHTML = '<div class="quiz-fb-correct">✅ 正确！' + (q.explanation ? q.explanation : '') + '</div>';
  } else {
    fb.innerHTML = '<div class="quiz-fb-wrong">❌ 不对哦～正确答案是 ' + String.fromCharCode(65 + correct) + '。' + (q.explanation ? q.explanation : '') + '</div>';
  }

  // Update score
  const scoreEl = document.getElementById(containerId + '-score');
  scoreEl.textContent = '得分：' + container._quizScore + ' / ' + questions.length;

  // Check if all answered
  if (container._quizAnswered === questions.length) {
    const resultDiv = document.getElementById(containerId + '-result');
    const resultText = resultDiv.querySelector('.quiz-result-text');
    const pct = Math.round(container._quizScore / questions.length * 100);
    let msg = '';
    if (pct === 100) {
      msg = '🎉 满分！你已经完全掌握了本章内容，可以去雪王奶茶当店长！';
    } else if (pct >= 80) {
      msg = '👏 不错！大部分都掌握了，再复习一下错题就完美了。';
    } else if (pct >= 60) {
      msg = '💪 及格了！建议回头再看看本章的重点内容。';
    } else {
      msg = '📖 还需要加油哦！建议重新阅读本章内容后再试一次。';
    }
    resultText.textContent = msg;
    resultDiv.style.display = 'block';
  }
}

function retryQuiz(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  renderQuiz(containerId, container._quizData);
}

function checkMultipleAnswer(containerId, qi) {
  const container = document.getElementById(containerId);
  if (!container || container._quizAnsweredSet.has(qi)) return;

  const questions = container._quizData;
  const q = questions[qi];
  const correctAnswers = q.answer; // Array of correct indices

  // Get selected checkboxes
  const qDiv = document.getElementById(containerId + '-q' + qi);
  const checkboxes = qDiv.querySelectorAll('.quiz-checkbox');
  const selected = [];
  checkboxes.forEach(function(cb, idx) {
    if (cb.checked) {
      selected.push(idx);
    }
  });

  if (selected.length === 0) {
    alert('请至少选择一个答案！');
    return;
  }

  container._quizAnsweredSet.add(qi);
  container._quizAnswered++;

  // Check if answer is correct (all correct answers selected, no wrong answers selected)
  const isCorrect = selected.length === correctAnswers.length && 
                    selected.every(idx => correctAnswers.includes(idx));

  if (isCorrect) {
    container._quizScore++;
  }

  // Update option styles
  const labels = qDiv.querySelectorAll('.quiz-option-multiple');
  labels.forEach(function(label, idx) {
    label.classList.add('quiz-option-disabled');
    const checkbox = label.querySelector('.quiz-checkbox');
    checkbox.disabled = true;
    
    if (correctAnswers.includes(idx)) {
      label.classList.add('quiz-option-correct');
    } else if (selected.includes(idx)) {
      label.classList.add('quiz-option-wrong');
    }
  });

  // Hide submit button
  const submitBtn = qDiv.querySelector('.quiz-submit-btn');
  if (submitBtn) {
    submitBtn.style.display = 'none';
  }

  // Show feedback
  const fb = document.getElementById(containerId + '-fb' + qi);
  const correctLetters = correctAnswers.map(idx => String.fromCharCode(65 + idx)).join('、');
  if (isCorrect) {
    fb.innerHTML = '<div class="quiz-fb-correct">✅ 正确！' + (q.explanation ? q.explanation : '') + '</div>';
  } else {
    fb.innerHTML = '<div class="quiz-fb-wrong">❌ 不对哦～正确答案是 ' + correctLetters + '。' + (q.explanation ? q.explanation : '') + '</div>';
  }

  // Update score
  const scoreEl = document.getElementById(containerId + '-score');
  scoreEl.textContent = '得分：' + container._quizScore + ' / ' + questions.length;

  // Check if all answered
  if (container._quizAnswered === questions.length) {
    const resultDiv = document.getElementById(containerId + '-result');
    const resultText = resultDiv.querySelector('.quiz-result-text');
    const pct = Math.round(container._quizScore / questions.length * 100);
    let msg = '';
    if (pct === 100) {
      msg = '🎉 满分！你已经完全掌握了本章内容，可以去雪王奶茶当店长！';
    } else if (pct >= 80) {
      msg = '👏 不错！大部分都掌握了，再复习一下错题就完美了。';
    } else if (pct >= 60) {
      msg = '💪 及格了！建议回头再看看本章的重点内容。';
    } else {
      msg = '📖 还需要加油哦！建议重新阅读本章内容后再试一次。';
    }
    resultText.textContent = msg;
    resultDiv.style.display = 'block';
  }
}
