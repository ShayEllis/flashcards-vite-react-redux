import { createSlice } from '@reduxjs/toolkit'

const initialState = { topics: {} }

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, { payload }) => state.topics[payload.id] = {...payload, quizIds: []},
        addTopicToQuizIds: (state, { payload }) => state.topics[payload.topicId].quizIds.push(payload.quizId) 
    }
})

export const selectTopics = (state) => state.topics.topics

export const { addTopic } = topicsSlice.actions
export default topicsSlice.reducer