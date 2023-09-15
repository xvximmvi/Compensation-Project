/* A class representing your resource. At the moment, its name is Resource. But you
   can (and probalby should) rename it to whatever you are going to use as a Resource.
   At the moment the example resource has only a name. You can delete this property
   if you don't need it.
*/


/*
class Resource {
    constructor(name) {
        this.name = name;
    }
}

    --> Replace the Resource class with your custom class (e.g., Animal)
        and add the required properties (String, Number, Boolean, and Date property).
 */
class Animal {
    constructor(name, age, isDomesticated, birthDate) {
        this.name = name;
        this.age = age;
        this.isDomesticated = isDomesticated;
    }
}

/* A model managing a map of resources. The id of the object is used as a key in the map. */
class Model {
    static ID = 1;

    constructor() {
        this.resources = new Map();
    }

    add(resource) {
        resource.id = Model.ID++;
        this.resources.set(resource.id, resource);
    }

    get(id) {
        this.checkId(id);
        return this.resources.get(id);
    }

    getAll() {
        return Array.from(this.resources.values());
    }

    checkId(id) {
        if (typeof id !== "number") {
            throw new Error(`Given id must be a number, but is a ${typeof id}`);
        }
    }

    create(resource) {
        this.add(resource);
        return resource;
    }

    update(id, resource) {
        this.checkId(id);

        const target = this.resources.get(id);
        if (!target) {
            throw new Error(`Resource with ${id} does not exist and cannot be updated.`)
        }

        Object.assign(target, resource);

        return target;
    }

    delete = (id) => {
        this.checkId(id);
        return this.resources.delete(id);
    }
}

const model = new Model();

/* Task 1 - Part 2. Replace these three instances of the example Class Resource with instances
   of your own class */
model.add(new Animal("Lion", 5, false));
model.add(new Animal("Dog", 3, true));
model.add(new Animal("Elephant", 10, false));

module.exports = model;
