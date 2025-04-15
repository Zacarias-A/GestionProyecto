class Minima{
    cargoExtra(_cargoBase, _duracion){
      return 0;
    }
  
    siguiente(){
      return new Media();
    }
  }
  
  class Media{
    cargoExtra(cargoBase, _duracion){
      return cargoBase * 0.05;
    }
  
    siguiente(){
      return new Maxima();
    }
  }
  
  class Maxima{
    cargoExtra(cargoBase, duracion){
      return (duracion <= 10) ? cargoBase * 0.07: (cargoBase * 0.07) + ((duracion - 10) * 1000); 
    }
  
    siguiente(){
      return new Minima();
    }
  }

module.exports = { Minima, Media, Maxima };
