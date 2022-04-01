import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { PostService } from './posts/services/posts.service';

@WebSocketGateway({
  cors: {
    credentials: true,
    methods: ['GET', 'POST'],
    origin: ['https://realtime-messenger18.herokuapp.com/'],
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;
  constructor(private readonly postService: PostService) {}
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('send_message')
  async listenForMessages(
    @MessageBody()
    payload: any,
  ) {
    const message = await this.postService.createPost(payload);
    this.server.emit('receive_message', message);
    return message;
  }
  @SubscribeMessage('request_all_messages')
  async requestAllMessages() {
    const messages = await this.postService.getAllPosts();

    this.server.emit('send_all_messages', messages);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
