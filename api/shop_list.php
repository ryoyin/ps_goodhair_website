<?php

$shop_list_mapping = array(
  0 => 245,
  1 => 245,
  2 => 245,
  3 => 245,
  4 => 245,
  5 => 245,
  6 => 245,
);

require_once(dirname(__FILE__) . '/landing/generated_shop_list/list_' . $shop_list_mapping[date('w')] . '.php');

foreach ($generated_shop_list as $k => $v) {
  $generated_shop_list[$k]['id'] = $k;
}

echo json_encode(array_values($generated_shop_list));
