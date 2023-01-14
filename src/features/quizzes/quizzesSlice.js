import { createSlice } from '@reduxjs/toolkit'
import { addQuizIdToTopic } from '../topics/topicsSlice'

export const createQuiz = (payload) => {
    return (dispatch, getState) => {
        // create new quiz
        dispatch(addQuiz(payload))
        // associate quiz with topic
        dispatch(addQuizIdToTopic(payload))
    }
}

const initialState = { quizzes: {} }

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, { payload }) => { state.quizzes[payload.id] = payload }
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes

export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer