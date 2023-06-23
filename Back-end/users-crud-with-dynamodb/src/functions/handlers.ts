import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { v4 } from 'uuid'
import { dynamoDb } from './database'

const tableName = 'Users'

export const create = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body as string)
    const user = { id: v4(), ...body }

    await dynamoDb.put({ TableName: tableName, Item: user }).promise()

    return { statusCode: 201, body: JSON.stringify(user) }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) }
  }
}

export const readOne = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id

  try {
    const user = await dynamoDb
      .get({ TableName: tableName, Key: { id } })
      .promise()
    return { statusCode: 200, body: JSON.stringify(user) }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) }
  }
}

export const readAll = async (): Promise<APIGatewayProxyResult> => {
  try {
    const user = await dynamoDb.scan({ TableName: tableName }).promise()
    return { statusCode: 200, body: JSON.stringify(user.Items) }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) }
  }
}
