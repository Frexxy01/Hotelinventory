import { ElementRef, Renderer2 } from '@angular/core';
import { HoverDirective } from './hover.directive';
import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

describe('HoverDirective', () => {
  let directive: HoverDirective;
  let mockElementRef: ElementRef;
  let mockRenderer: Renderer2;
  let mockDocument: Document;

  beforeEach(() => {
    // Mock ElementRef
    mockElementRef = {
      nativeElement: {}
    } as ElementRef;

    // Mock Renderer2
    mockRenderer = {
      addClass: jest.fn(),
      removeClass: jest.fn(),
    } as unknown as Renderer2;

    // Mock Document
    mockDocument = document;

    TestBed.configureTestingModule({
      providers: [
        HoverDirective,
        { provide: ElementRef, useValue: mockElementRef },
        { provide: Renderer2, useValue: mockRenderer },
        { provide: DOCUMENT, useValue: mockDocument }
      ]
    });

    directive = TestBed.inject(HoverDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
