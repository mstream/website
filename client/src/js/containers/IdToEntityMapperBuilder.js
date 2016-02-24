const IdToEntityMapperBuilder = (state, entityName) =>
    id => state.entities[entityName].get(id);


export default IdToEntityMapperBuilder;