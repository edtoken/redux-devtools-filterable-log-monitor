/** @flow */
import React, { PropTypes } from 'react'
import JSONTree from 'react-json-tree'
import FilterHeader from './FilterHeader'

FilterableState.propTypes = {
  action: PropTypes.object.isRequired,
  actionId: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  filterByKeys: PropTypes.bool.isRequired,
  filterByValues: PropTypes.bool.isRequired,
  filteredState: PropTypes.object.isRequired,
  filterText: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
}

export default function FilterableState ({
  action,
  actionId,
  dispatch,
  filterByKeys,
  filterByValues,
  filteredState,
  filterText,
  theme
}) {
  return (
    <div>
      <FilterHeader
        action={action}
        actionId={actionId}
        dispatch={dispatch}
        filterByKeys={filterByKeys}
        filterByValues={filterByValues}
        filterText={filterText}
        theme={theme}
      />
      <JSONTree
        data={filteredState}
        theme={theme}
      />
    </div>
  )
}
