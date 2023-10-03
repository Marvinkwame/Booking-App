const Hotel = require("../models/Hotels");

const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// delete hotel by id
const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

//Getting a particular hotel
const getSingleHotel = async (req, res, next) => {
  try {
    const singleHotel = await Hotel.findById(req.params.id);
    res.status(200).json(singleHotel);
  } catch (err) {
    next(err);
  }
};

//Getting all Hotels
const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max ||  999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(","); //makes the query an array of cities 
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'Hotel' });
    const apartmentCount = await Hotel.countDocuments({ type: 'Apartment' });
    const resortCount = await Hotel.countDocuments({ type: 'Resort' });
    const villasCount = await Hotel.countDocuments({ type: 'Villa'});
    const cabinsCount = await Hotel.countDocuments({ type: 'Cabin'})
    const cottagesCount = await Hotel.countDocuments({ type: 'Cottage'})
    const vacationHomeCount = await Hotel.countDocuments({ type: 'Vacation home'})
    const motelCount = await Hotel.countDocuments({ type: 'Motel'})
    

    res.status(200).json([
      { type: 'Hotel', count: hotelCount },
      { type:'Apartment', count : apartmentCount},
      { type:'Resort', count : resortCount },
      { type:"Villas", count : villasCount } ,
      { type:"Cabins" , count : cabinsCount },
      { type:"Cottages" , count : cottagesCount },
      { type :"Vacation Homes" , count : vacationHomeCount },
      { type :"Motels" , count : motelCount },
    ])

  } catch (err) {
    next(err)
  }
}

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotels,
  countByCity,
  countByType,
};
