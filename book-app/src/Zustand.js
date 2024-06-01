import { create } from 'zustand'

const  useStore = create((set) => ({
  id :"" ,
  updateid: (newBears) => set({ id: newBears }),

  }))

  export default useStore ;