import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// 创建一个异步的action
export const asyIncrease = createAsyncThunk(
  'counter/asyIncrease',
  async (param, store) => {
    console.log(param, 111) // param页面调用传递过来的参数
    const val = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(param)
      }, 1000);
    })
    
    // 第一种方式异步任务结束后，触发dispatch去改变state, //第二种方式对于异步action可以在extraReducers里监听异步action asyIncrease的状态，状态有三种，rejected， fuilled, pending
    // store.dispatch(incrementByAmount(val)) 
    return val
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 10,
    asyncValue: 100
  },
  reducers: { // 会生成对应的action
    // increment: (state) => {
    //   console.log(1123)
    //   state.count += 1
    // },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
  extraReducers: { // 可以处理上面的额外的action, 这里面的不会在counterSlice.actions里面生成对应的action
    //第二种方式对于异步action可以监听asyIncrease的状态，状态有三种，rejected， fulfilled, pending
    [asyIncrease.fulfilled]: (state, action) => {
      state.count += action.payload
    },
    'counter/increment': (state) => { // 监听同步的额外的action不需要状态， counterSlice.actions里面的action优先执行，没有的才会进入到extraReducers
      console.log(1123)
      state.count += 6
    },
  }
})

// 导出同步的action
export const { decrement, incrementByAmount } = counterSlice.actions

// increment() , decrement(), incrementByAmount(), 本质上就是action,action其实就是对象{type: '', payload: ''}这种形式

export default counterSlice.reducer