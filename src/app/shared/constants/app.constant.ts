export const Constants = {
    max_total_score: 800,
    max_qa_va_score: 60,
    current_target_score_equal: total_score => `Your estimated total score as per your performance in this mock test is ${total_score}, which is equal to your target score.`,
    current_higher_than_target_score: (current_score, difference, type ,target_score) => `Your estimated total score as per your performance in this mock test is ${current_score}, which is ${difference} points lower than your target ${type} of ${target_score}.`,
    current_lower_than_target_score: (current_score, difference, type ,target_score) => `Your estimated total score as per your performance in this mock test is ${current_score}, which is ${difference} points higher than your target ${type} of ${target_score}.`
};
