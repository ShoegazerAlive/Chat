'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('messages', [
      {
        uuid: '7648485a-6657-48d7-87d6-6a98931d3598',
        content: 'Hey Fernanda!',
        from: 'Juan',
        to: 'Fernanda',
        createdAt: '2020-07-01 07:00:00',
        updatedAt: '2020-07-01 07:00:00',
      },
      {
        uuid: 'ae4df4f1-a428-400d-bb16-edd4237e0c47',
        content: "Hola, Juan, cómo estás?",
        from: 'Fernanda',
        to: 'Juan',
        createdAt: '2020-07-01 08:00:00',
        updatedAt: '2020-07-01 08:00:00',
      },
      {
        uuid: '0a7c92ac-f69c-4799-8aad-9663a4afb47d',
        content: 'Vientos, trabajando y tú?',
        from: 'Juan',
        to: 'Fernanda',
        createdAt: '2020-07-01 09:00:00',
        updatedAt: '2020-07-01 09:00:00',
      },
      {
        uuid: '240dd560-5825-4d5d-b089-12a67e8ec84c',
        content: "También, hago Home Office",
        from: 'Fernanda',
        to: 'Juan',
        createdAt: '2020-07-01 10:00:00',
        updatedAt: '2020-07-01 10:00:00',
      },
      {
        uuid: '60909592-cfd7-4b16-a1ce-709091d5f6d7',
        content: "Qué bien! Yo también empezaré a hacer Home office pronto",
        from: 'Juan',
        to: 'Fernanda',
        createdAt: '2020-07-01 11:00:00',
        updatedAt: '2020-07-01 11:00:00',
      },
      {
        uuid: 'a10ad37d-c70b-4093-ae33-e5d0ab9498e1',
        content: 'En serio? Qué chido! cómo lo lograste?',
        from: 'Fernanda',
        to: 'Juan',
        createdAt: '2020-07-01 12:00:00',
        updatedAt: '2020-07-01 12:00:00',
      },
      {
        uuid: 'be49ab98-5271-4eb9-a630-dd6d37e420ed',
        content: 'Me promovieron, pronto subiré de puesto',
        from: 'Juan',
        to: 'Fernanda',
        createdAt: '2020-07-01 13:00:00',
        updatedAt: '2020-07-01 13:00:00',
      },
      {
        uuid: 'a10ad37d-c70b-4093-ae33-e5d0ab9429e4',
        content: "Eso es genial, me alegra mucho!",
        from: 'Fernanda',
        to: 'Juan',
        createdAt: '2020-07-01 14:00:00',
        updatedAt: '2020-07-01 14:00:00',
      },
      {
        uuid: 'be49ab98-5271-4eb9-a630-dd6d37e623j7',
        content: 'Gracias ;)',
        from: 'Juan',
        to: 'Fernanda',
        createdAt: '2020-07-01 15:00:00',
        updatedAt: '2020-07-01 15:00:00',
      },
      {
        uuid: 'fd4cee68-5caf-4b1b-80a9-5b9add7fd863',
        content: 'Oye, Juan, terminaste con los pendientes?',
        from: 'Jorge',
        to: 'Juan',
        createdAt: '2020-07-01 11:00:00',
        updatedAt: '2020-07-01 11:00:00',
      },
      {
        uuid: 'fd4cee68-5caf-4b1b-80a9-5b9add7fd863',
        content: 'Oye, Fer, cómo vas con los pendientes?',
        from: 'Jorge',
        to: 'Fernanda',
        createdAt: '2020-07-01 11:00:00',
        updatedAt: '2020-07-01 11:00:00',
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('messages', null, {})
  },
}