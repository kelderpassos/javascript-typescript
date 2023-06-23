import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { v4 } from 'uuid'
import { dynamoDb } from './database'

const tableName = 'Users'

export const createUser = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body as string)
    const user = { id: v4(), ...body }

    await dynamoDb
      .put({
        TableName: tableName,
        Item: user,
      })
      .promise()

    return { statusCode: 201, body: JSON.stringify(user) }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) }
  }
}
