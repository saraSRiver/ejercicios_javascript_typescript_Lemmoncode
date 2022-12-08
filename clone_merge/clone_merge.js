    function clone(source){
        source = {
            especie:'Caballo',
            nombre:'Pinto',
            pelaje:'Blanco y castaño',
            sexo:'Macho',
            edad: 9
        }
        console.log(source);
        let copy = {...source};
        console.log(copy);
    }
        clone();

    function merge(source,target){
        source = {
            especie:'Caballo',
            nombre:'Pinto',
            pelaje:'Blanco y castaño',
            sexo:'Macho',
            edad: 9
        }
        target = {
            especie:'Caballo',
            nombre:'Flecha',
            raza:'American Paint Horse',
            edad: 4,
            castrado: false
        }

        let copies = {...target,...source};
        console.log(copies);
    }
        merge();