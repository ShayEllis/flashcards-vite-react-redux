import { createSlice } from '@reduxjs/toolkit'

const initialState = { topics: {} }

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, { payload }) => { state.topics[payload.id] = {...payload, quizIds: []} },
        addQuizIdToTopic: (state, { payload }) => { state.topics[payload.topicId].quizIds.push(payload.id) } 
    }
})

export const selectTopics = (state) => state.topics.topics

export const { addTopic, addQuizIdToTopic } = topicsSlice.actions
export default topicsSlice.reducer