import {Router} from 'express';
import fs from "fs";


const json = {
  episodes: [
    {
      id: "a-importancia-da-contribuicao-em-open-source",      
      title: "Faladev #30 | A importância da contribuição em Open Source",
      members: "Diego Fernandes, João Pedro, Diego Haz e Bruno Lemos",
      published_at: "2021-01-22 16:35:40",
      thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg",
      description: "<p>Nesse episódio do Faladev, Diego Fernandes se reúne com João Pedro Schmitz, Bruno Lemos e Diego Haz, para discutir sobre a importância da contribuição open source e quais desafios circulam na comunidade.</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat.</p>",
      file: {
        url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a",
        type: "audio/x-m4a",
        duration: 3981
      }
    }
  ]
}

const routes = Router();

routes.get("/", (request, response)=>{
  
  response.json(json)


})






export {routes}