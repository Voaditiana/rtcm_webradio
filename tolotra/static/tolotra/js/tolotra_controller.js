angular.module("App",[]).controller("offre",function ($scope) {
    $scope.offres = [
        {prix:'3500Ar',prod:"Annonce",type:"radio"},
        {prix:"5000Ar",prod:"Spot (-45sec)",type:"radio"},
        {prix:"100000Ar",prod:"Matraquage",type:"radio"},
        {prix:"120000Ar",prod:"Matraquage",type:"TV"},
        {prix:"45000Ar",prod:"fidirana akory lahaly",type:"radio"},
        {prix:"20000Ar",prod:"top horaire",type:"radio"},
        {prix:"100000Ar",prod:"Couverture médiathèque",type:"radio"},
        {prix:"75000Ar",prod:"Spot",type:"TV"},
        {prix:"20000Ar",prod:"Petite émission (-5min)",type:"TV"},
        {prix:"15000Ar",prod:"Barre de défilement",type:"TV"},
        {prix:"40000Ar",prod:"Montage audio",type:"radio"},
        {prix:"50000Ar",prod:"Montage vidéo",type:"TV"}
    ]
});