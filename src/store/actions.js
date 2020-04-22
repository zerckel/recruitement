export const objectCombination = (context, {title, template}) => {

  let obj = {
    id: context.state.combination.length + 1,
    title: title,
    template: template,
    nbrAppears: 1
  }
  context.commit('addCombination', obj)
}

export const incrementCombination = (context, id) => {
  id.id -= 1
  context.commit('incrementAppears', id)
}