import {
  Component,
  type ComponentInterface,
  Element,
  Event,
  type EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { type Attributes, inheritAttributes } from '#utils/helpers';

/**
 * @part image - The inner `img` element.
 */
@Component({
  tag: 'pop-img',
  styleUrl: 'img.scss',
  shadow: true,
})
export class Img implements ComponentInterface {
  private nativeImg: HTMLImageElement;
  private inheritedAttributes: Attributes = {};

  private observer?: IntersectionObserver;

  @Element() host!: HTMLElement;

  @State() loadSrc?: string;
  @State() loadError?: () => void;

  /**
   * The image URL. This attribute is mandatory for the `<img>` element.
   */
  @Prop() src: string;
  @Watch('src')
  onSrcChange() {
    this.initObserver();
  }

  /**
   * This attribute defines the alternative text describing the image.
   * Users will see this text displayed if the image URL is wrong,
   * the image is not in one of the supported formats, or if the image is not yet downloaded.
   */
  @Prop() alt?: string;

  /**
   * Emitted when the img src has been set
   */
  @Event() popWillLoad: EventEmitter<void>;

  /**
   * Emitted when the image has finished loading
   */
  @Event() popDidLoad: EventEmitter<void>;

  /**
   * Emitted when the img fails to load
   */
  @Event() popError: EventEmitter<void>;

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.host, ['draggable']);
  }

  componentDidLoad(): void {
    this.initObserver();
  }

  private initObserver(): void {
    if (!this.src) return;

    if (supportIntersectionObserver()) {
      this.removeObserver();
      this.observer = new IntersectionObserver(entries => {
        if (entries.at(-1).isIntersecting) {
          this.load();
          this.removeObserver();
        }
      });
      this.observer.observe(this.host);
    } else {
      this.nativeImg.loading = 'lazy';
      this.load();
    }
  }

  private removeObserver(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  private load(): void {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.popWillLoad.emit();
  }

  private onLoad = (): void => {
    this.popDidLoad.emit();
  };

  private onError = (): void => {
    this.popError.emit();
  };

  render() {
    const { draggable } = this.inheritedAttributes;

    return (
      <Host>
        <img
          alt={this.alt || ''}
          draggable={isDraggable(draggable)}
          // decoding="sync"
          loading="eager"
          onError={this.onError}
          onLoad={this.onLoad}
          part="image"
          ref={el => (this.nativeImg = el)}
          src={this.loadSrc}
        />
      </Host>
    );
  }
}

function supportIntersectionObserver(): boolean {
  return (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'isIntersecting' in window.IntersectionObserverEntry.prototype
  );
}
/**
 * Enumerated strings must be set as booleans
 * as Stencil will not render 'false' in the DOM.
 * The need to explicitly render draggable="true"
 * as only certain elements are draggable by default.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable.
 */
const isDraggable = (draggable?: string): boolean | undefined => {
  switch (draggable) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return undefined;
  }
};
