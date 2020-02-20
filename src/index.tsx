// Copyright (c) 2020 Rohman Habib M
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react'

type Props = {
  instance: React.ComponentType
}

export default function withForceHooks<P>(
  OriginalComponent: React.ComponentType<P>
): React.ComponentType<P> | null {
  const actualRender = OriginalComponent.prototype.render

  function ForceHooksProvider(props: Props) {
    if (!props.instance) {
      return null
    }

    return actualRender.call(props.instance)
  }

  const componentName =
    OriginalComponent.displayName || OriginalComponent.name || 'Component'
  ForceHooksProvider.displayName = componentName + 'ForceHooks'

  OriginalComponent.prototype.render = function() {
    return <ForceHooksProvider instance={this} />
  }

  return OriginalComponent
}
