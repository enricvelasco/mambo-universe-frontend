import React from 'react'
import { Row, Column } from '@Application/grid-layout'
import LinkButton from '@Components/common/link-button'

const FormularyList = ({ linkToNew }) => (
  <div>
    <Row>
      <Column large={2} small={2}>
        <LinkButton link={linkToNew}>
                    NEW
        </LinkButton>
      </Column>
      <Column large={2} small={2}>
                BUSCADOR
      </Column>
    </Row>
  </div>
)

export default FormularyList
