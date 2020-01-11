import qql from "graphql-tag";

const LIST_PROJECTS = qql`
                        query {
                            projects_list(limit: 5) {
                              projects {
                                id,
                                title,
                                content,
                                status,
                                image
                              }
                            }
                        }
                        `;


export { LIST_PROJECTS };
