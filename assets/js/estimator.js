var RandomForestClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    var trees = new Array();

    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[7] <= 0.5) {
            if (features[10] <= 0.5) {
                if (features[11] <= 4.5) {
                    classes[0] = 74; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    if (features[11] <= 6.5) {
                        classes[0] = 0; 
                        classes[1] = 5; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 18; 
                    }
                }
            } else {
                if (features[4] <= 0.5) {
                    if (features[0] <= 0.5) {
                        if (features[11] <= 5.0) {
                            classes[0] = 10; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 3; 
                        }
                    } else {
                        if (features[1] <= 1.5) {
                            classes[0] = 4; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            if (features[2] <= 142.5) {
                                if (features[11] <= 5.0) {
                                    classes[0] = 2; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 13; 
                                }
                            } else {
                                if (features[11] <= 6.5) {
                                    classes[0] = 0; 
                                    classes[1] = 2; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 3; 
                                }
                            }
                        }
                    }
                } else {
                    if (features[3] <= 226.0) {
                        classes[0] = 0; 
                        classes[1] = 2; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 9; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                }
            }
        } else {
            if (features[6] <= 134.0) {
                if (features[11] <= 6.5) {
                    classes[0] = 0; 
                    classes[1] = 2; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 22; 
                }
            } else {
                if (features[11] <= 6.5) {
                    if (features[4] <= 0.5) {
                        classes[0] = 14; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[6] <= 145.0) {
                            classes[0] = 2; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 1; 
                            classes[2] = 0; 
                        }
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 21; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[2] <= 113.5) {
            if (features[2] <= 102.0) {
                if (features[10] <= 0.5) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 2; 
                }
            } else {
                if (features[6] <= 151.0) {
                    if (features[5] <= 1.0) {
                        if (features[9] <= 1.5) {
                            classes[0] = 3; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            if (features[10] <= 0.5) {
                                if (features[0] <= 0.5) {
                                    classes[0] = 1; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 1; 
                                    classes[2] = 0; 
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            }
                        }
                    } else {
                        classes[0] = 13; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                } else {
                    if (features[0] <= 0.5) {
                        classes[0] = 8; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[9] <= 1.5) {
                            classes[0] = 2; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 3; 
                        }
                    }
                }
            }
        } else {
            if (features[11] <= 4.5) {
                classes[0] = 92; 
                classes[1] = 0; 
                classes[2] = 0; 
            } else {
                if (features[8] <= 1.7000000476837158) {
                    if (features[7] <= 0.5) {
                        if (features[2] <= 119.0) {
                            if (features[0] <= 0.5) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            } else {
                                if (features[5] <= 1.0) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 1; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 1; 
                                    classes[2] = 0; 
                                }
                            }
                        } else {
                            if (features[8] <= 0.10000000149011612) {
                                if (features[2] <= 130.0) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 3; 
                                } else {
                                    if (features[10] <= 0.5) {
                                        classes[0] = 0; 
                                        classes[1] = 1; 
                                        classes[2] = 0; 
                                    } else {
                                        classes[0] = 0; 
                                        classes[1] = 0; 
                                        classes[2] = 2; 
                                    }
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 19; 
                            }
                        }
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 22; 
                    }
                } else {
                    if (features[8] <= 2.3499999046325684) {
                        if (features[9] <= 1.5) {
                            classes[0] = 0; 
                            classes[1] = 1; 
                            classes[2] = 0; 
                        } else {
                            if (features[11] <= 6.5) {
                                classes[0] = 0; 
                                classes[1] = 5; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 4; 
                            }
                        }
                    } else {
                        if (features[9] <= 2.5) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 14; 
                        } else {
                            if (features[5] <= 1.0) {
                                classes[0] = 0; 
                                classes[1] = 2; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            }
                        }
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[11] <= 4.5) {
            classes[0] = 124; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[1] <= 1.5) {
                if (features[9] <= 2.5) {
                    if (features[8] <= 1.899999976158142) {
                        classes[0] = 0; 
                        classes[1] = 1; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 1; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 1; 
                }
            } else {
                if (features[11] <= 6.5) {
                    classes[0] = 0; 
                    classes[1] = 4; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 76; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[8] <= 0.949999988079071) {
            if (features[11] <= 4.5) {
                classes[0] = 87; 
                classes[1] = 0; 
                classes[2] = 0; 
            } else {
                if (features[3] <= 205.0) {
                    if (features[2] <= 127.5) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 1; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 1; 
                        classes[2] = 0; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 18; 
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[6] <= 141.5) {
                    if (features[2] <= 144.5) {
                        if (features[4] <= 0.5) {
                            if (features[11] <= 5.0) {
                                classes[0] = 1; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 4; 
                            }
                        } else {
                            if (features[8] <= 2.049999952316284) {
                                classes[0] = 2; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                if (features[3] <= 205.5) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 1; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 2; 
                                    classes[2] = 0; 
                                }
                            }
                        }
                    } else {
                        classes[0] = 0; 
                        classes[1] = 4; 
                        classes[2] = 0; 
                    }
                } else {
                    if (features[1] <= 3.5) {
                        if (features[3] <= 224.0) {
                            classes[0] = 6; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            if (features[8] <= 3.8999998569488525) {
                                if (features[5] <= 1.0) {
                                    if (features[1] <= 1.5) {
                                        classes[0] = 0; 
                                        classes[1] = 0; 
                                        classes[2] = 2; 
                                    } else {
                                        if (features[11] <= 5.0) {
                                            classes[0] = 6; 
                                            classes[1] = 0; 
                                            classes[2] = 0; 
                                        } else {
                                            classes[0] = 0; 
                                            classes[1] = 0; 
                                            classes[2] = 1; 
                                        }
                                    }
                                } else {
                                    classes[0] = 8; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 2; 
                            }
                        }
                    } else {
                        if (features[11] <= 5.0) {
                            classes[0] = 5; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 9; 
                        }
                    }
                }
            } else {
                if (features[8] <= 2.1500000953674316) {
                    if (features[6] <= 128.5) {
                        if (features[9] <= 1.5) {
                            classes[0] = 1; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            if (features[11] <= 6.5) {
                                if (features[8] <= 1.649999976158142) {
                                    if (features[6] <= 117.0) {
                                        classes[0] = 2; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    } else {
                                        classes[0] = 0; 
                                        classes[1] = 3; 
                                        classes[2] = 0; 
                                    }
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 5; 
                                    classes[2] = 0; 
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 4; 
                            }
                        }
                    } else {
                        if (features[0] <= 0.5) {
                            classes[0] = 2; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            if (features[5] <= 1.0) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 8; 
                            } else {
                                if (features[3] <= 289.5) {
                                    if (features[4] <= 0.5) {
                                        if (features[6] <= 143.0) {
                                            classes[0] = 0; 
                                            classes[1] = 0; 
                                            classes[2] = 1; 
                                        } else {
                                            classes[0] = 1; 
                                            classes[1] = 0; 
                                            classes[2] = 0; 
                                        }
                                    } else {
                                        classes[0] = 2; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    }
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 2; 
                                }
                            }
                        }
                    }
                } else {
                    if (features[6] <= 143.5) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 10; 
                    } else {
                        if (features[2] <= 155.0) {
                            if (features[8] <= 2.9499998092651367) {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 4; 
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 1; 
                            classes[2] = 0; 
                        }
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[9] <= 1.5) {
            if (features[0] <= 0.5) {
                if (features[3] <= 310.5) {
                    classes[0] = 39; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    if (features[6] <= 143.5) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 4; 
                    } else {
                        classes[0] = 6; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                }
            } else {
                if (features[11] <= 4.5) {
                    classes[0] = 33; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    if (features[6] <= 139.0) {
                        classes[0] = 0; 
                        classes[1] = 2; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 22; 
                    }
                }
            }
        } else {
            if (features[11] <= 6.5) {
                if (features[11] <= 4.5) {
                    classes[0] = 40; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 15; 
                    classes[2] = 0; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 0; 
                classes[2] = 46; 
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[1] <= 3.5) {
            if (features[6] <= 113.0) {
                classes[0] = 0; 
                classes[1] = 0; 
                classes[2] = 4; 
            } else {
                if (features[0] <= 0.5) {
                    classes[0] = 29; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    if (features[7] <= 0.5) {
                        if (features[6] <= 189.0) {
                            if (features[10] <= 0.5) {
                                if (features[1] <= 2.5) {
                                    if (features[2] <= 163.0) {
                                        if (features[2] <= 113.0) {
                                            classes[0] = 0; 
                                            classes[1] = 0; 
                                            classes[2] = 1; 
                                        } else {
                                            if (features[1] <= 1.5) {
                                                classes[0] = 2; 
                                                classes[1] = 0; 
                                                classes[2] = 0; 
                                            } else {
                                                if (features[2] <= 125.0) {
                                                    if (features[6] <= 177.5) {
                                                        if (features[3] <= 273.5) {
                                                            classes[0] = 0; 
                                                            classes[1] = 0; 
                                                            classes[2] = 2; 
                                                        } else {
                                                            classes[0] = 2; 
                                                            classes[1] = 0; 
                                                            classes[2] = 0; 
                                                        }
                                                    } else {
                                                        classes[0] = 3; 
                                                        classes[1] = 0; 
                                                        classes[2] = 0; 
                                                    }
                                                } else {
                                                    classes[0] = 4; 
                                                    classes[1] = 0; 
                                                    classes[2] = 0; 
                                                }
                                            }
                                        }
                                    } else {
                                        classes[0] = 0; 
                                        classes[1] = 0; 
                                        classes[2] = 2; 
                                    }
                                } else {
                                    if (features[6] <= 164.0) {
                                        classes[0] = 14; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    } else {
                                        if (features[11] <= 5.0) {
                                            classes[0] = 7; 
                                            classes[1] = 0; 
                                            classes[2] = 0; 
                                        } else {
                                            classes[0] = 0; 
                                            classes[1] = 0; 
                                            classes[2] = 1; 
                                        }
                                    }
                                }
                            } else {
                                if (features[11] <= 4.5) {
                                    classes[0] = 9; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    if (features[6] <= 142.0) {
                                        classes[0] = 0; 
                                        classes[1] = 2; 
                                        classes[2] = 0; 
                                    } else {
                                        classes[0] = 0; 
                                        classes[1] = 0; 
                                        classes[2] = 8; 
                                    }
                                }
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 2; 
                            classes[2] = 0; 
                        }
                    } else {
                        if (features[2] <= 165.0) {
                            if (features[6] <= 149.0) {
                                if (features[3] <= 276.0) {
                                    classes[0] = 5; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 1; 
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 4; 
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 5; 
                        }
                    }
                }
            }
        } else {
            if (features[0] <= 0.5) {
                if (features[11] <= 4.5) {
                    classes[0] = 27; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    if (features[3] <= 233.0) {
                        classes[0] = 0; 
                        classes[1] = 1; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 4; 
                    }
                }
            } else {
                if (features[2] <= 117.5) {
                    if (features[11] <= 5.0) {
                        classes[0] = 11; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 4; 
                    }
                } else {
                    if (features[8] <= 1.899999976158142) {
                        if (features[6] <= 170.5) {
                            if (features[11] <= 6.5) {
                                classes[0] = 0; 
                                classes[1] = 2; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 28; 
                            }
                        } else {
                            if (features[11] <= 5.0) {
                                classes[0] = 1; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 2; 
                            }
                        }
                    } else {
                        if (features[9] <= 1.5) {
                            classes[0] = 0; 
                            classes[1] = 2; 
                            classes[2] = 0; 
                        } else {
                            if (features[3] <= 173.0) {
                                classes[0] = 0; 
                                classes[1] = 2; 
                                classes[2] = 0; 
                            } else {
                                if (features[11] <= 6.5) {
                                    classes[0] = 0; 
                                    classes[1] = 2; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 14; 
                                }
                            }
                        }
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[3] <= 215.5) {
            if (features[7] <= 0.5) {
                if (features[11] <= 4.5) {
                    classes[0] = 36; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    if (features[1] <= 2.5) {
                        classes[0] = 0; 
                        classes[1] = 2; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 2; 
                    }
                }
            } else {
                if (features[8] <= 1.4500000476837158) {
                    if (features[5] <= 1.0) {
                        if (features[2] <= 127.0) {
                            classes[0] = 1; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 4; 
                        }
                    } else {
                        classes[0] = 7; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                } else {
                    if (features[11] <= 4.5) {
                        classes[0] = 3; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[11] <= 6.5) {
                            classes[0] = 0; 
                            classes[1] = 7; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 3; 
                        }
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[9] <= 1.5) {
                    if (features[11] <= 4.5) {
                        classes[0] = 54; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[6] <= 139.5) {
                            if (features[11] <= 6.5) {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 5; 
                        }
                    }
                } else {
                    if (features[11] <= 4.5) {
                        classes[0] = 25; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[5] <= 1.0) {
                            if (features[6] <= 137.0) {
                                if (features[1] <= 3.5) {
                                    classes[0] = 0; 
                                    classes[1] = 1; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 1; 
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 4; 
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 12; 
                        }
                    }
                }
            } else {
                if (features[8] <= 1.2000000476837158) {
                    if (features[5] <= 1.0) {
                        if (features[11] <= 5.0) {
                            classes[0] = 6; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 2; 
                        }
                    } else {
                        if (features[6] <= 116.0) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 2; 
                        } else {
                            if (features[0] <= 0.5) {
                                classes[0] = 3; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                if (features[8] <= 0.75) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 3; 
                                } else {
                                    classes[0] = 1; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                }
                            }
                        }
                    }
                } else {
                    if (features[0] <= 0.5) {
                        if (features[6] <= 157.5) {
                            classes[0] = 0; 
                            classes[1] = 3; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 1; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    } else {
                        if (features[8] <= 1.5499999523162842) {
                            if (features[2] <= 145.0) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 3; 
                            } else {
                                classes[0] = 1; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 13; 
                        }
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[1] <= 3.5) {
            if (features[11] <= 4.5) {
                classes[0] = 81; 
                classes[1] = 0; 
                classes[2] = 0; 
            } else {
                if (features[11] <= 6.5) {
                    classes[0] = 0; 
                    classes[1] = 3; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 27; 
                }
            }
        } else {
            if (features[6] <= 168.5) {
                if (features[0] <= 0.5) {
                    if (features[9] <= 1.5) {
                        classes[0] = 6; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[7] <= 0.5) {
                            if (features[4] <= 0.5) {
                                if (features[8] <= 2.299999952316284) {
                                    classes[0] = 6; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    if (features[6] <= 158.5) {
                                        classes[0] = 0; 
                                        classes[1] = 0; 
                                        classes[2] = 2; 
                                    } else {
                                        classes[0] = 1; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    }
                                }
                            } else {
                                classes[0] = 2; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        } else {
                            if (features[8] <= 0.6000000238418579) {
                                if (features[6] <= 129.5) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 2; 
                                } else {
                                    classes[0] = 4; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 4; 
                            }
                        }
                    }
                } else {
                    if (features[5] <= 1.0) {
                        if (features[2] <= 114.5) {
                            if (features[6] <= 158.0) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 2; 
                            } else {
                                classes[0] = 1; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        } else {
                            if (features[2] <= 122.5) {
                                if (features[8] <= 2.0999999046325684) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 4; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 1; 
                                    classes[2] = 0; 
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 12; 
                            }
                        }
                    } else {
                        if (features[6] <= 106.5) {
                            if (features[6] <= 104.0) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 3; 
                                classes[2] = 0; 
                            }
                        } else {
                            if (features[2] <= 116.0) {
                                if (features[6] <= 137.0) {
                                    classes[0] = 6; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    if (features[10] <= 0.5) {
                                        classes[0] = 1; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    } else {
                                        classes[0] = 0; 
                                        classes[1] = 0; 
                                        classes[2] = 2; 
                                    }
                                }
                            } else {
                                if (features[11] <= 6.5) {
                                    if (features[8] <= 0.9000000357627869) {
                                        classes[0] = 0; 
                                        classes[1] = 1; 
                                        classes[2] = 0; 
                                    } else {
                                        classes[0] = 1; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    }
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 16; 
                                }
                            }
                        }
                    }
                }
            } else {
                if (features[11] <= 5.0) {
                    classes[0] = 16; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 2; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[8] <= 0.75) {
            if (features[0] <= 0.5) {
                classes[0] = 47; 
                classes[1] = 0; 
                classes[2] = 0; 
            } else {
                if (features[8] <= 0.15000000596046448) {
                    if (features[10] <= 1.5) {
                        if (features[11] <= 4.5) {
                            classes[0] = 28; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            if (features[3] <= 207.0) {
                                classes[0] = 0; 
                                classes[1] = 2; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 5; 
                            }
                        }
                    } else {
                        if (features[3] <= 277.5) {
                            classes[0] = 3; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 4; 
                        }
                    }
                } else {
                    if (features[10] <= 0.5) {
                        if (features[3] <= 293.0) {
                            if (features[5] <= 1.0) {
                                if (features[11] <= 5.0) {
                                    classes[0] = 2; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 6; 
                                }
                            } else {
                                classes[0] = 1; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        } else {
                            classes[0] = 2; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    } else {
                        if (features[7] <= 0.5) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 4; 
                        } else {
                            if (features[11] <= 6.5) {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            }
                        }
                    }
                }
            }
        } else {
            if (features[8] <= 1.5499999523162842) {
                if (features[1] <= 3.5) {
                    if (features[11] <= 5.0) {
                        classes[0] = 14; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 6; 
                    }
                } else {
                    if (features[11] <= 5.0) {
                        classes[0] = 10; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 19; 
                    }
                }
            } else {
                if (features[6] <= 143.5) {
                    if (features[11] <= 6.5) {
                        classes[0] = 0; 
                        classes[1] = 2; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 25; 
                    }
                } else {
                    if (features[5] <= 1.0) {
                        classes[0] = 5; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[4] <= 0.5) {
                            if (features[3] <= 217.5) {
                                if (features[2] <= 125.0) {
                                    classes[0] = 2; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 2; 
                                }
                            } else {
                                if (features[8] <= 3.4000000953674316) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 9; 
                                } else {
                                    if (features[2] <= 145.0) {
                                        classes[0] = 1; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    } else {
                                        classes[0] = 0; 
                                        classes[1] = 0; 
                                        classes[2] = 3; 
                                    }
                                }
                            }
                        } else {
                            if (features[2] <= 152.5) {
                                classes[0] = 2; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            }
                        }
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[11] <= 4.5) {
            classes[0] = 123; 
            classes[1] = 0; 
            classes[2] = 0; 
        } else {
            if (features[3] <= 229.0) {
                if (features[8] <= 2.0999999046325684) {
                    if (features[1] <= 2.5) {
                        if (features[2] <= 137.5) {
                            classes[0] = 0; 
                            classes[1] = 2; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 1; 
                        }
                    } else {
                        if (features[10] <= 1.5) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 17; 
                        } else {
                            if (features[5] <= 1.0) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            }
                        }
                    }
                } else {
                    if (features[11] <= 6.5) {
                        classes[0] = 0; 
                        classes[1] = 5; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 2; 
                    }
                }
            } else {
                classes[0] = 0; 
                classes[1] = 0; 
                classes[2] = 55; 
            }
        }
    
        return findMax(classes);
    });
    
    this.predict = function(features) {
        var classes = new Array(3).fill(0);
        for (var i = 0; i < trees.length; i++) {
            classes[trees[i](features)]++;
        }
        return findMax(classes);
    }

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 == 12) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var prediction = new RandomForestClassifier().predict(features);
        console.log(prediction);

    }
}
