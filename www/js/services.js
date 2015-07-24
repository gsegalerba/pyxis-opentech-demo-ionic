angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Tony Pacheco',
    lastText: 'Con la 8, me aburri de hacerles goles',
    face: 'http://historico.ovaciondigital.com.uy/11/04/13/174797_298.jpg'
  }, {
    id: 1,
    name: 'Dario Rodriguez',
    lastText: 'Son cosas del futbol..',
    face: 'http://oi60.tinypic.com/ta6mah.jpg'
  }, {
    id: 2,
    name: 'Marcelo Zalayeta',
    lastText: 'Muy feliz por haber llegado a un acuerdo de renovación con el club.',
    face: 'http://www.aguantenche.com.uy/wp-content/uploads/2012/09/zala.jpg'
  }, {
    id: 3,
    name: 'Pablo Javier Bengoechea',
    lastText: 'Pero bueno nosotros tenemos un equipo fuerte pero bueno.',
    face: 'https://pbs.twimg.com/media/CIUbH_6WIAAHOBm.jpg'
  }, {
    id: 4,
    name: 'Jonathan Sandocan',
    lastText: 'Todavia no puedo creer que sigo aca!!!',
    face: 'http://www.ovaciondigital.com.uy/files/article_main/uploads/2015/03/19/550b82790266b.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
