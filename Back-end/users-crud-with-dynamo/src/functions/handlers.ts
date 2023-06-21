import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { dynamoDB } from '@src/database/connection'
import { v4 } from 'uuid'

export const createUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body as string)

  try {
    await dynamoDB.put({
      TableName: 'UsersTable',
      Item: { userID: v4(), ...body},
    }).promise()
  
    return { statusCode: 200, body: JSON.stringify(body) }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to create item' })}
  }  
}

export const getUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id

  if (!id) return { statusCode: 500, body: JSON.stringify({ error: 'Invalid id' }) }

  try {    
    const userById = await dynamoDB.get({
      TableName: 'UsersTable',
      Key: {id}
    }).promise()
    
    return { statusCode: 200, body: JSON.stringify(userById) }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch user' }) }
  }
}