require([
    "dojo/store/Memory",
    "dijit/form/FilteringSelect",
    "dijit/form/Button",
    "dijit/form/SimpleTextarea",
    "dijit/form/ToggleButton",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/on",
    "dojo/dom-style",
    "dojo/domReady!"
], function(Memory, FilteringSelect, Button, SimpleTextarea, ToggleButton, dom, domClass, on, domStyle){

    // Create a ToggleButton Widget with id relanceButton and label Relance
    var relanceButton = new ToggleButton({
        id: "relanceButton",
        label: "Relance",
        onChange: hideDiv
    }, "relanceButton");
    relanceButton.startup();

    // Create a ToggleButton Widget with id commentaireButton and label Commentaire
    var commentaireButton = new ToggleButton({
        id: "commentaireButton",
        label: "Commentaire",
        onChange: hideDivCom
    }, "commentaireButton");
    commentaireButton.startup();
    
    // Retieve elements from DOM
    var relanceDiv = dom.byId("relanceDiv");
    var commentaireDiv = dom.byId("commentaireDiv");

    // Create a Store Object for TypeDestinataire
    var storeTypeDestinataire = new Memory({
        data: [
            {id: "D", name: "Distributeur"},
            {id: "E", name: "Expert"}
        ]
    });

    // Create a Store Object for Type d'expert
    var storeExpert = new Memory({
        data: [
            {id: "JU", name: "Juridique"},
            {id: "DE", name: "Développement"},
            {id: "CO", name: "Conformité"},
            {id: "DC", name: "Direction Comptable"},
            {id: "DP", name: "Direction placement et inventaires"},
            {id: "DO", name: "Direction Commissions"},
            {id: "PD", name: "Produit"},
            {id: "DT", name: "Direction Assistance Technique"}
        ]
    });

    // Create a Store Object for Destinaire
    var storeDestinataire = new Memory({
        data: [
            {id: "EBO", name: "BO Distributeur"},
            {id: "EJU", name: "Expert - Juridique"},
            {id: "EDE", name: "Expert - Développement"},
            {id: "ECO", name: "Expert - Conformité"},
            {id: "EDC", name: "Expert - Direction Comptable"},
            {id: "EDP", name: "Expert - Direction placement et inventaires"},
            {id: "EDO", name: "Expert - Direction Commissions"},
            {id: "EPD", name: "Expert - Produit"},
            {id: "EDT", name: "Expert - Direction Assistance Technique"}
        ]
    });
    
    // Create a FilteringSelect widget with storeTypeDestinataire as data source
    var filteringSelectTypeDestinataire = new FilteringSelect({
        id: "filteringSelectTypeDestinataire",
        name: "filteringSelectTypeDestinataire",
        value: "",
        store: storeTypeDestinataire,
        searchAttr: "name",
        onChange: function(){
            if (filteringSelectTypeDestinataire.get("value") == "E"){
                domStyle.set("divExpert", "display", "block");
            } else {
                domStyle.set("divExpert", "display", "none");
            }
        }
    }, "filteringSelectTypeDestinataire");
    filteringSelectTypeDestinataire.startup();

    // Create a FilteringSelect widget with storeExpert as data source
    var filteringSelectExpert = new FilteringSelect({
        id: "filteringSelectExpert",
        name: "filteringSelectExpert",
        value: "",
        store: storeExpert,
        searchAttr: "name"
    }, "filteringSelectExpert");
    filteringSelectExpert.startup();

    // Create a FilteringSelect widget with storeDestinataire as data source
    var filteringSelectDestinataire = new FilteringSelect({
        id: "filteringSelectDestinataire",
        name: "filteringSelectDestinataire",
        value: "",
        store: storeDestinataire,
        searchAttr: "name"
    }, "filteringSelectDestinataire");
    filteringSelectDestinataire.startup();
    
    // Create a button widget 
    var btnAjouterCommentaireRelance = new Button({
        id: "btnAjouterCommentaireRelance",
        label: "ajouter",
        onClick: function(){
            // Function Test
            alert("You selected " + filteringSelectTypeDestinataire.get("displayedValue"));
        }
    }, "btnAjouterCommentaireRelance");
    btnAjouterCommentaireRelance.startup();

    // Cria um widget Button com uma função de clique
    var btnAjouterCommentaireCommentaire = new Button({
        id: "btnAjouterCommentaireCommentaire",
        label: "ajouter",
        onClick: function(){
            // Aqui você pode colocar o código que deseja executar quando o botão for clicado
            alert("Você selecionou o destinataire " + filteringSelectDestinataire.get("displayedValue"));
        }
    }, "btnAjouterCommentaireCommentaire");
    btnAjouterCommentaireCommentaire.startup();
    
    // Create a TextArea Widget with 2000 character limit
    var commentaireRelance = new SimpleTextarea({
        id: "commentaireRelance",
        name: "commentaireRelance",
        value: "",
        maxLength: 2000,
        rows: "4",
        cols: "50",
        style: "width:auto;"
    }, "commentaireRelance");
    commentaireRelance.startup();

    // Create a TextArea Widget with 2000 character limit
    var commentaireCommentaire = new SimpleTextarea({
        id: "commentaireCommentaire",
        name: "commentaireCommentaire",
        value: "",
        maxLength: 2000,
        rows: "4",
        cols: "50",
        style: "width:auto;"
    }, "commentaireCommentaire");
    commentaireCommentaire.startup();
    
    // Create a function to update the label with the number of characters
    function updateLabel(){
        var commentaireRelanceText = commentaireRelance.get("value");
        var length = commentaireRelanceText.length;
        var remaining = commentaireRelance.maxLength  - length;
        var caracteresRemaining = dom.byId("caracteresRemaining");
        caracteresRemaining.innerHTML = remaining + " caractères restants";
        if (remaining == 0) {
            domStyle.set("caracteresRemaining","color","red");
        } else {
            domStyle.set("caracteresRemaining","color","black");
        }
    }

    function updateLabel2(){
        var commentaireCommentaireText = commentaireCommentaire.get("value");
        var length = commentaireCommentaireText.length;
        var remaining = commentaireCommentaire.maxLength  - length;
        var caracteresRemaining2 = dom.byId("caracteresRemaining2");
        caracteresRemaining2.innerHTML = remaining + " caractères restants";
        if (remaining == 0) {
            domStyle.set("caracteresRemaining2","color","red");
        } else {
            domStyle.set("caracteresRemaining2","color","black");
        }
    }

    function hideDiv(val){
        // If button is checked, relanceDiv is displayed
        //and commentaireButton is setted as "uncheck"
        if (val) {
            domStyle.set("relanceDiv", "display", "block");
            commentaireButton.set("checked", false);
        }
        // otherwise relanceDiv is hidden
        else {
            domStyle.set("relanceDiv", "display", "none");
        }
    }

    function hideDivCom(val){
        // If button is checked, commentaireDiv is displayed
        //and relanceButton is setted as "uncheck"
        if (val) {
            domStyle.set("commentaireDiv", "display", "block");
            relanceButton.set("checked", false);
        }
        // otherwise commentaireDiv is hidden
        else {
            domStyle.set("commentaireDiv", "display", "none");
        }
    }

    on(commentaireRelance, "keypress", updateLabel);
    on(commentaireCommentaire, "keypress", updateLabel2);
    


});