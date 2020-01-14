import qql from "graphql-tag";

const LIST_PROJECTS = qql`
                        query {
                            projects_list(limit: 5) {
                              projects {
                                id,
                                title,
                                content,
                                isActive,
                                image
                              }
                            }
                        }
                        `;

const GET_PROJECT = (id) => qql`
                        query {
                            project(id: ${id}) {
                                title,
                                content,
                                image
                            }
                        }
`;


export { LIST_PROJECTS, GET_PROJECT };
