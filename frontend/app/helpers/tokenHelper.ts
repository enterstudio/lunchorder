import { Injectable } from '@angular/core';
import { ConfigService } from '../services/configService';

@Injectable()
export class TokenHelper {
    constructor(private configService: ConfigService) {
    }
	private tokenFragment = 'id_token';

	getCurrentURL () {
			return window.location.href;
		}

    getToken() : string {
		var url = this.getCurrentURL();
        if(url.indexOf(this.tokenFragment) > -1) {
					
				var params = url.split('#')[1].split('&')

				for(var i =0;i<params.length;i++){
					console.log('temp: ' + params[i]);
					var temp = params[i].split('=');
					var key   = temp[0];
					var value = temp[1];
					if(key.indexOf(this.tokenFragment) > -1) {
						this.configService.authToken = value;
						return value;
					}
				}
			}
    }
}