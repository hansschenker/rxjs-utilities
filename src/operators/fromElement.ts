// src/operators/fromElement.ts
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// Generic fromElement operator with event-specific payload handling
export function fromElement<E extends HTMLElement, T extends keyof HTMLElementEventMap, P extends keyof E>(
  element: E,
  eventType: T,
  elementValue?: P
) {
  return fromEvent(element, eventType).pipe(
    map((event) => {
      // Handling different event payloads
      if (eventType === 'click') {
        const mouseEvent = event as MouseEvent;
        return {
          clientX: mouseEvent.clientX,
          clientY: mouseEvent.clientY,
        };
      }

      if (eventType === 'keydown') {
        const keyboardEvent = event as KeyboardEvent;
        return {
          key: keyboardEvent.key,
          code: keyboardEvent.code,
        };
      }

      if (eventType === 'change') {
        const changeEvent = event as Event;
        if (element instanceof HTMLInputElement) {
          return {
            value: element.value,
            checked: element.checked,
          };
        } else if (element instanceof HTMLSelectElement) {
          return {
            selectedIndex: element.selectedIndex,
            value: element.value,
          };
        }
      }

      // If no specific payload handling, return the event
      return event;
    })
  );
}
