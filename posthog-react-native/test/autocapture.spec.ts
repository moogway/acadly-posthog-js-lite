import { autocaptureFromTouchEvent } from '../src/autocapture'

import goodEvent from './data/autocapture-event.json'
import ignoreEvent from './data/autocapture-event-no-capture.json'

describe('PostHog React Native', () => {
  jest.useRealTimers()
  describe('autocapture', () => {
    const nativeEvent = { pageX: 1, pageY: 2 }
    it('should capture a valid event', () => {
      const mockPosthog = { autocapture: jest.fn() } as any
      autocaptureFromTouchEvent({ _targetInst: goodEvent, nativeEvent }, mockPosthog)
      expect(mockPosthog.autocapture).toHaveBeenCalledTimes(1)
      expect(mockPosthog.autocapture.mock.calls[0]).toMatchSnapshot()
    })

    it('should ignore an invalid event', () => {
      const mockPosthog = { autocapture: jest.fn() } as any
      autocaptureFromTouchEvent({ _targetInst: ignoreEvent, nativeEvent }, mockPosthog)
      expect(mockPosthog.autocapture).toHaveBeenCalledTimes(0)
    })
  })
})
