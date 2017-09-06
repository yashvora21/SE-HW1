# HW1

This Repository consists of all the material pertaining to the Submission for HW1 of Software Engineering Class of Fall'17.

# Created and managed by:
**Name** : Yash Vora <br/>
**Unity Id** : yvora <br/>
**Student ID**: 200149815

# Submission Contents:

### REST Code

**List Branches** : https://github.ncsu.edu/yvora/HW1/blob/master/REST/branch.js <br/>
**Create a new Repo** : https://github.ncsu.edu/yvora/HW1/blob/master/REST/createNewRepo.js <br/>
**Create an issue** : https://github.ncsu.edu/yvora/HW1/blob/master/REST/createIssue.js <br/>
**Edit a Repo** : https://github.ncsu.edu/yvora/HW1/blob/master/REST/editRepo.js <br/>
**Listing all Reactions** : https://github.ncsu.edu/yvora/HW1/blob/master/REST/listReactions.js <br/> <br/>

### Concepts

**1. Some concerns related to REST apis** :
  * REST APIs usually has multiple endpoints representing every resource. This basically requires clients to perform multiple round trips to the server to get all the data it requires.
  * REST APIs does not have a client request language due to which clients do not have control over what data the server will return. Hence, the language available for client is very limited.
  * Based on the above pitfall, the client cannot specify which fields to select for a record in that resource. That information is in the REST API service itself which will always return all of the fields regardless of which ones the client actually needs resulting in a lot of network and memory resources wastage for both client and server.
  * If we need to support multiple versions in REST APIs usually called as new endpoints, leads to more problems while using and maintaining those endpoints causing code duplication on the server.

**2. Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language.** :

| RESTful Architecture                              | Graph Query Language                        |
| --------------------------------------------------| --------------------------------------------|
| 1. To fetch all the initial data required by a    | 1. All the initial data required by a view  |
| view, we need to introduce unstructured parameters| can be fetched by Graph Query Language in   |
| and conditions that are hard to manage and scale. | just a single round trip to server.         |
|                                                   |                                             |
| 2. When utilizing protocols such as HTTP, REST can|  2. GraphQL invents its own conventions while|
| leverage HTTP content-types,caching.status codes,etc| utilizing its protocols.                   |                         
|                                                   |                                              |
| 3. Hypermedia controls in REST lets a well designed | 3. If the API is not using hypermdeia controls,|
  client run around an API like a user browses through| then GraphQL could be a more relevant approach.|
  the internet to find some information.             |                                              |
|                                                   |                                               |
| 4. REST generally defaults to the fullest response| 4. GraphQL is always the smallest possible request|
| to a request deteriorating performance.           |  putting client performance first.            |
|                                                   |                                               |
| 5. The URL in REST APIs is a globally unique identifier| 5. In GraphQL, there is no URL-like primitive|
| that the client can leverage to build a cache.    | that provides this globally unique identifier for clients to use. |
|                                                   |                                                |
| 6. In REST, the endpoint called is the identity of| 6. In GraphQL, the identity is seperate from how you fetch it.|
| that object.                                      |                                                |
|                                                   |                                                |
| 7. In REST, the shape and size of the resource is | 7. In GraphQL, the server declares what resources are |
| determined by the server.                         | available, and the client asks for what it needs at the time. |









