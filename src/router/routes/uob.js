export default [
  {
    path: '/card-registration',
    name: 'card-registration',
    component: () => import('@/views/pages/contents/CardRegistration.vue'),
    meta: {
      pageTitle: 'Customer',
      breadcrumb: [
        {
          layout: 'full',
          text: 'Registration',
          active: true,
        },
      ],
    },
  },
]
