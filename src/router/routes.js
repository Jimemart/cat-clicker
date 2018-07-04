
const routes = [
  { path: '/', redirect: '/first-step'},
  { path: '/first-step', name: 'First Step', component: () => import('@/views/FirstStep.vue') },
  { path: '/second-step', name: 'Second Step', component: () => import('@/views/SecondStep.vue') },
  { path: '/third-step', name: 'Third Step', component: () => import('@/views/ThirdStep.vue') }
]

export default routes
