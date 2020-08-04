<div hidden id="snipcart" data-api-key="__SNIPCART_API_KEY__">
  <cart-header title="Planty">
    <div class="root">
      <header class="snipcart-cart-header" v-if="!loading">
        <close-cart-action class="snipcart-cart-header__close-button snipcart-modal__close">
          <icon class="snipcart-modal__close-icon snipcart__icon--blue-light" name="back-arrow"></icon>
          <span class="snipcart-modal__close-title snipcart__font--std">
            {{ $localize('actions.continue_shopping') }}
          </span>
        </close-cart-action>

        <h3 class="snipcart-cart-header__title snipcart__font--black snipcart__font--secondary" v-if="title">
          <img src="__LOGO_DARK__" alt="">
        </h3>

        <div class="snipcart-cart-header__count snipcart__font--secondary snipcart__font--bold">
          <icon name="cart" class="snipcart-cart-header__icon snipcart__icon--blue-dark"></icon>
          {{ itemsCount }}
        </div>
      </header>
      <header class="snipcart-cart-header" v-else>
        <close-cart-action class="snipcart-modal__close">
          <icon class="snipcart-modal__close-icon snipcart__icon--blue-light" name="back-arrow"></icon>
          <span class="snipcart-modal__close-title snipcart__font--std">
            {{ itemsCount }}
          </span>
        </close-cart-action>
      </header>
    </div>
  </cart-header>
  <checkout section="header">
    <div class="root">
      <div class="snipcart-layout__header">
        <header class="snipcart-modal__header snipcart-modal__header--fixed">
          <close-cart-action class="snipcart-modal__close">
            <icon name="back-arrow" class="snipcart-modal__close-icon snipcart__icon--blue-light"
              alt="actions.close_cart"></icon>
            <span class="snipcart-modal__close-title snipcart__font--std">
              {{ $localize('actions.continue_shopping') }}
            </span>
          </close-cart-action>

          <img src="__LOGO_DARK__" alt="" class="snipcart-modal__logo">

          <div class="snipcart-modal__header-summary">
            <div
              class="snipcart-modal__header-summary-title snipcart__font--large snipcart__font--secondary snipcart__font--bold"
              @click.prevent="showSummary">
              <icon name="cart" class="snipcart__icon--blue-dark"></icon>
              <span>
                {{ total | money(cart.currency) }}
              </span>
              <media name="mobile, tablet">
                <icon name="summaryIcon" class="snipcart__icon--blue-dark snipcart__icon--medium"></icon>
              </media>
            </div>
            <cart-summary class="snipcart-cart-summary--small" v-if="summaryVisible" @close="closeSummary"></cart-summary>
          </div>
        </header>
      </div>
    </div>
  </checkout>
</div>