const ENDPOINT_URL = "https://fun-moose-91.hasura.app/v1/graphql";
const Lukulab_Exercise_QUERY = `
    query {
         Lukulab_exercise {
            id
            name
            type
            collection_id
            skill_tag
            Complexity_level
            text
            active elements
            timer
            instructions
            correct answer
            average result
        }
    }
`;
export const fetchLukulab_exercise = async () => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: Lukulab_Exercise_QUERY
        })
    });
    return await response.json();
};