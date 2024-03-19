export const OverviewCard = ({user, audienceType, audience}) => {
  return (
    <article>
        <p>{user}</p>
        <p>{audience}</p>
        <p>{audienceType}</p>
    </article>
  )
}
