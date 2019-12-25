var mongoose = require('mongoose');

var CarimgsSchema = new mongoose.Schema({
  car_id: String,
  img_roof:Array,
  img_bonnet_hood:Array,
  img_dicky_door_boot_door:Array,
  img_quarter_panel:Array,
  img_fender:Array,
  img_boot_floor:Array,
  img_pillar:Array,
  img_apron:Array,
  img_door:Array,
  img_tyre:Array,
  img_firewall:Array,
  img_cowl_top:Array,
  img_upper_cross_member_bonnet_patti:Array,
  img_front_show:Array,
  img_lower_cross_member:Array,
  img_radiator_support:Array,
  img_head_light_support:Array,
  img_running_border:Array,
  img_windshield:Array,
  img_light:Array,
  img_bumper:Array,
  img_orvm:Array,
  img_alloy_wheel:Array,
  img_engine:Array,
  img_exhaust_smoke:Array,
  img_engine_permissible_blow_by_back_compression:Array,
  img_fabric_seat:Array,  
});

module.exports = mongoose.model('Carimgs', CarimgsSchema);
