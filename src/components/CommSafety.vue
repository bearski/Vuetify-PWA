<template>
  <div>

    <h1>Neighbourhood Safety Watch</h1>
    <h2>Being a Neighbourhood Watch Member</h2>
    <form-wizard>
      <tab-content>
        <h3>Learning objectives for this section:</h3><br/>
        Understanding what it means to be a neighbourhood watch member and active citizen.<br/>
        Listing the things that a neighbourhood watch member should know.<br/>
        Understanding the benefit of neighbourhood watch.<br/>
        Knowing and understanding ways to create safety awareness in communities.<br/>
      </tab-content>
      <tab-content>
          <h3>What does it mean to be a neighbourhood watch member and active citizen?</h3>
          <ul>
            <li>Being a member of a Neighbourhood Watch does not give a person any special rights or privileges.  Being a member of a Neighbourhood Watch means that you have extra responsibility to be a good role model.  This means that you must be a responsible and law-abiding citizen.</li>
            <li>An active citizen can take part in delivering services which are needed in practical ways such as: voicing your opinions and participating in the fight against crime.</li>
            <li>You can prevent crime by ensuring your own safety, e.g. not walking alone at night in areas that are not well-lit.</li>
            <li>You can also help to prevent crime by being observant and reporting any suspicious looking persons or activities to SAPS.</li>
            <li>If all citizens in a community stand together, crime will drop, and we will have healthier and happier communities with fewer incidences of violence or xenophobia.</li>
          </ul>
       </tab-content>
       <tab-content >
         <h3>Something to think about and discuss</h3>
         1.	Think of someone you consider to be a ‘good’, ‘proud’ and ‘patriotic’ South African citizen.  How does that person behave in their daily life as a citizen?<br/>
         2.	Good citizens know that they have rights and responsibilities under the constitution of South Africa.  List a ‘right’ that all citizens in South Africa have<br/>
         3.	Now discuss with a partner what you think the associated responsibilities of citizens are in terms of this right.<br/>
         <p>Write down your thoughts.</p>
       </tab-content>
       <tab-content >
         <h3>What are my rights?</h3>
         All the rights and responsibilities can be found in the constitution of South Africa.  It applies to all citizens and residents equally.  Note that even if someone is only visiting as a tourist it also applies to them.<br/>
         It is important that we read and understand the constitution of South Africa and the associated human rights it supports.<br/>
         Below follow some extracts and summaries from the constitution.  Read each section carefully and then write notes in response to the questions or prompts in the space allowed below each section.<br/>
       </tab-content>
       <tab-content >
         <h3>From Chapter 2 of the Constitution – Human Rights</h3>
         <h4>Section 10 – Human Dignity</h4>
         <p>‘Everyone has inherent dignity and the right to have their dignity respected protected’.</p>
         <h4>What does that mean to you personally?</h4>
       </tab-content>
    </form-wizard>


  </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

// import serverData from '../server/CommSafety_Section2.json'

export default {
  name: 'commsafety',
  // data: function () {
  //   return {
  //     data: serverData
  //   }
  // },
  components: {
    FormWizard,
    TabContent
  }
}

</script>


<style>
</style>
