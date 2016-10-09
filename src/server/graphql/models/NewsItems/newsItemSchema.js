import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt
} from 'graphql'
import {GraphQLTitleType} from '../types'
import {makeRequired} from '../utils'

export const Note = new GraphQLObjectType({
  name: 'NewsItem',
  description: 'A news item',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID), description: 'The newsItemId'},
    userId: {type: new GraphQLNonNull(GraphQLID), description: 'The userId that created the newsItem'},
    title: {type: new GraphQLNonNull(GraphQLTitleType), description: 'The newsItem title'},
    content: {type: GraphQLString, description: 'The newsItem content'},
    img: {type: GraphQLString, description: 'The path to the newsItem image'},
    annotation: {type: GraphQLString, description: 'The newsItem annotation'},
    createdAt: {type: GraphQLString, description: 'The datetime the newsItem was created'},
    updatedAt: {type: GraphQLString, description: 'The datetime the newsItem was last updated'}
  })
})

const inputFields = {
  id: {type: GraphQLID, description: 'The noteId'},
  userId: {type: GraphQLID, description: 'The userId that created the note'},
  title: {type: GraphQLTitleType, description: 'The note title'},
  content: {type: GraphQLString, description: 'The newsItem content'},
  img: {type: GraphQLString, description: 'The path to the newsItem image'},
  annotation: {type: GraphQLString, description: 'The newsItem annotation'}
}

export const UpdatedNewsItem = new GraphQLInputObjectType({
  name: 'UpdatedNewsItem',
  description: 'Args to update a newsItem',
  fields: () => makeRequired(inputFields, ['id'])
})

export const NewNewsItem = new GraphQLInputObjectType({
  name: 'NewNewsItem',
  description: 'Args to add a newsItem',
  fields: () => makeRequired(inputFields, ['userId', 'title', 'content', 'annotation'])
})
