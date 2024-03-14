import Card from "./Card";
Card

function List(){
    const namesList = {
        name1: {
            name: 'Eman Bryndt',
            email: 'emanbaliongbryndt@gmail.com'
        },
        name2: {
            name: 'Raven Mahinay',
            email: 'mahinayraven@gmail.com'
        },
        name3: {
            name: 'James Anthony',
            email: 'anthonyjames@gmail.com'
        },
        name4: {
            name: 'Sean Archer',
            email: 'archersean@gmail.com'
        },
        name5: {
            name: 'John Doe',
            email: 'John@doe.com'
        }
    }
    return (
        <>
          {Object.keys(namesList).map((key) => {
            const name = namesList[key];
            return (
              <NameComponent
                key={key}
                name={name.name}
                email={name.email}
                className="names"
              />
            );
          })}
        </>
      );
}

export default List