import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';
import { RouterLink } from '@angular/router';
import { FilterPipe } from "../filter.pipe";

@Component({
  selector: 'hotelinventoryapp-rooms-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FilterPipe
],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.title)
    if (changes['title']) {
      console.log('This title is changed!')
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  @Input() rooms: RoomList[]  = []

  @Input() title: string = ''

  @Input() price: number= 0

  @Output() roomSelected = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.roomSelected.emit(room)
  }
  ngOnDestroy(): void {
    console.log('Ondestroy is called.')
  } 
}
