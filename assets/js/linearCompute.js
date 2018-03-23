function computeform(){
					var matrix = [[0, -0.00478347, 0.01177812, 0.57014633, 1.16434058, 0.00514362, 0.01648159, -1.00023792, 0.00500862, 0.02540065, 0.01088893, 0.03758150, 0.02711717, 0.03030615],
              [-0.00478347, 0, 0.01834577, -2.5152363, -21.98538557, 0.02922886, 0.07198383, -2.96237562, 0.14396766, 0.26525187, 0.04399876, 0.18423507, 1.58753109, 0.59763682],
              [0.01177812 , 0.01834577 , 0         ,-0.68078737 , 3.88493683, -0.02106498 ,0.06589526, -8.0677525 ,  0.18380538 , 0.24563916 , 0.09679627 , 0.22931991 , 0.53947851, 0.51724054],
              [0.57014633 ,-2.51523632 ,-0.68078737 , 0         , 0.38504834,  0.00358886 ,0.00835922, -0.06342503,  0.00176373 , 0.01255505 , 0.00421707 , 0.00517796 , 0.01508128, 0.01109394],
              [1.16434058 ,-21.98538557, 3.88493683 , 0.38504834 , 0          ,0.00008615 ,0.00315797, -0.0000329 ,  0.00053608 , 0.00086557, -0.00010956 , 0.00209371 , 0.00040486, 0.00157764],
              [0.00514362 , 0.02922886, -0.02106498 , 0.00358886 , 0.00008615 , 0        , 0.19428676, -0.51043765 ,-0.00119026 , 0.02749496 , 0.08386742 , 0.40514558, 0.34215345, 0.17176341],
              [0.01648159 , 0.07198383,  0.06589526 , 0.00835922,  0.00315797, 0.19428676, 0      ,   -1.66691565,  0.03865778 , 0.13329694 , 0.0839692 ,  0.12176511,  0.03662376, 0.2284877 ],
              [-1.0002379 ,-2.96237562, -8.0677525  ,-0.06342503, -0.0000329, -0.51043765, -1.6669156,  0      ,   -0.00787047, -0.01767059, -0.01049032, -0.0109986 , -0.02322402, -0.02263577],
              [0.00500862 , 0.14396766,  0.18380538 , 0.00176373 , 0.00053608, -0.00119026, 0.03865778, -0.00787047 , 0        , 0.71817526 , 0.32974227,  0.29628866 , 1.34917526, 1.02917526],
              [0.02540065 , 0.26525187,  0.24563916 , 0.01255505 , 0.00086557, 0.02749496, 0.13329694, -0.01767059,  0.71817526,  0     ,     0.30696016 , 0.2370936 ,  0.57350757, 0.53088649],
              [0.01088893 , 0.04399876,  0.09679627 , 0.00421707 ,-0.00010956, 0.08386742, 0.0839692, -0.01049032, 0.32974227, 0.30696016, 0, 0.16671628,  0.87709846, 0.7482736 ],
              [0.0375815, 0.18423507, 0.22931991, 0.00517796, 0.00209371, 0.40514558, 0.12176511, -0.0109986, 0.29628866, 0.2370936, 0.16671628 , 0, 0.52933891, 0.68524539],
              [0.02711717, 1.58753109, 0.53947851, 0.01508128, 0.00040486, 0.34215345, 0.03662376, -0.02322402, 1.34917526, 0.57350757, 0.87709846, 0.52933891, 0, 0.32692692],
              [0.03030615, 0.59763682, 0.51724054, 0.01109394, 0.00157764, 0.17176341, 0.2284877, -0.02263577, 1.02917526, 0.53088649, 0.7482736, 0.68524539, 0.32692692, 0]];
					var sum = document.getElementById("age").value*matrix[13][0] +
					    	  document.getElementById("sex").value*matrix[13][1] +
					    	  document.getElementById("cp").value*matrix[13][2] +
					    	  document.getElementById("trestbps").value*matrix[13][3] +
					    	  document.getElementById("chol").value*matrix[13][4] +
					    	  document.getElementById("fbs").value*matrix[13][5] +
					    	  document.getElementById("restecg").value*matrix[13][6] +
					    	  document.getElementById("thalach").value*matrix[13][7] +
					    	  document.getElementById("exang").value*matrix[13][8] +
					    	  document.getElementById("oldpeak").value*matrix[13][9] +
					    	  document.getElementById("slope").value*matrix[13][10] +
					    	  document.getElementById("ca").value*matrix[13][11] +
					    	  document.getElementById("thal").value*matrix[13][12];
					var ans = (4) * (sum - 3) / (13.2 - 3);
					var ans2 = ans/4.0*100.0;
					alert("Using the linear regression model, this patient has a " + ans2.toFixed(2) + "% chance of having heart disease\n" + "The prediction value was: " + ans.toFixed(2));
					return ans;
}