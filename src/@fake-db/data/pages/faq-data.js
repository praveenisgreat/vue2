import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  faqData: {
    // payment
    cardregistration: {
      icon: 'CreditCardIcon',
      title: 'New card registration',
      subtitle: 'For new users',
      qandA: [
        {
          question: 'Steps to register new user card?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question: 'What if the supportive information not available?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'Can i edit or update the auto populate information?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'How do i check the status of new card registration?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
        {
          question: 'What are option if the Approver reject the application?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        }
      ],
    },
    // delivery
    
    Account: {
      icon: 'UserPlusIcon',
      title: 'My account',
      subtitle: 'Maintain the account',
      qandA: [
        {
          question: 'How to reset my password?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question:
            'Can i change the profile settings?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'How auth JWT token works?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        }
      ],
    },
  },
}

mock.onGet('/faq/data').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const filteredData = {}

  Object.entries(data.faqData).forEach(entry => {
    const [categoryName, categoryObj] = entry
    // eslint-disable-next-line arrow-body-style
    const filteredQAndAOfCategory = categoryObj.qandA.filter(qAndAObj => {
      return qAndAObj.question.toLowerCase().includes(queryLowered)
    })
    if (filteredQAndAOfCategory.length) {
      filteredData[categoryName] = { ...categoryObj, qandA: filteredQAndAOfCategory }
    }
  })

  return [200, filteredData]
})
