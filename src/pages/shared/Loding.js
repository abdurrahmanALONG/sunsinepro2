
import React from 'react';

const Loding = () => {
    return (
        <div>
            <div class="flex items-center justify-center space-x-2">
                <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                    <span class="visually-hidden"></span>
                </div>
               
            </div>
        </div>
    );
};

export default Loding;