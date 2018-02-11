import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css']
})
export class ChatContentComponent implements OnInit {

  @Input()
  currentUser;

  chatList: string[];
  messageContent: string;

  constructor() {
    this.currentUser = "dummy"
    this.chatList = [
      "hello",
      "ok",
      "good",
      "bye"
    ]
  }

  ngOnInit() {
  }

  sendMessage() {
    console.log("sending message: ", this.messageContent)
  }
}
