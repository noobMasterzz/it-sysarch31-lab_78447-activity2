import Card from "./Card";

function List(){
    const namesList = {
        name1: {
            name: 'Eman Bryndt',
            email: 'emanbaliongbryndt@gmail.com',
            picture: "https://staticg.sportskeeda.com/editor/2023/10/a8f7e-16970550293200-1920.jpg?w=840"
        },
        name2: {
            name: 'Raven Mahinay',
            email: 'mahinayraven@gmail.com',
            picture:"https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720"
        },
        name3: {
            name: 'James Anthony',
            email: 'anthonyjames@gmail.com',
            picture: 'https://wegotthiscovered.com/wp-content/uploads/2022/06/4C4E7D0A-0DC2-4CAB-8BDA-16C33B94B511.jpeg'
        },
        name4: {
            name: 'Sean Archer',
            email: 'archersean@gmail.com',
            picture: 'https://www.fanbolt.com/main/webp-express/webp-images/uploads/2022/04/Male-Anime-Characters-800x500.jpg.webp'
        },
        name5: {
            name: 'Daniel Stephen',
            email: 'danielstephen@gmail.com',
            picture: 'https://www.looper.com/img/gallery/30-most-popular-boy-anime-characters-ranked-worst-to-best/intro-1648715126.jpg'
        },
        name6: {
            name: 'Lemuel Andrew',
            email: 'andrewlemuel@gmail.com',
            picture: 'https://qph.cf2.quoracdn.net/main-qimg-a4df9e91dcd1f12c00d554743ea7d8cf-lq'
        },
        name7: {
            name: 'Yancy',
            email: 'yancy@gmail.com',
            picture: 'https://static.fandomspot.com/images/11/10048/00-featured-meliodas-the-seven-deadly-sins-anime-preview.jpg'
        },
        name8: {
            name: 'Francis Bien',
            email: 'bienfrancis@gmail.com',
            picture:'https://imgix.ranker.com/user_node_img/4373/87455193/original/megumi-fushiguro-u-1073838125'
        },
        name9: {
            name: 'Nino Cezar ',
            email: 'Ninocezar@gmail.com',
            picture: 'https://i.pinimg.com/originals/68/f2/3d/68f23dcf146aa1ba5f230ee93b8c36b9.jpg'
        },
        name10: {
            name: 'Dominic',
            email: 'dominic@gmail.com',
            picture: 'https://facts.net/wp-content/uploads/2022/02/Itachi-Uchiha.jpg'
        }
    }

    return (
        <>
          {Object.keys(namesList).map((key) => {
            const name = namesList[key];
            return (
              <Card
                key={key}
                name={name.name}
                email={name.email}
                picture={name.picture}
                className="names"
              />
            );
          })}
        </>
      );
}

export default List