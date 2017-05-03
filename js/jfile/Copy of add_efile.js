/*!
 * add_efile 
 * 
 * 上传文件的js
 * HuangTing
 * 2012-04-26
 */

var swfu;
//页面加载数据  HuangTing 2012-04-26
$(document).ready(function(){
	
	// 检查SWFUpload是否可用
	if (typeof(SWFUpload) === "undefined") {
		return;
	}
	
	//上传文件设置
	var settings = {
		flash_url : "../plugins/swfupload/swfupload.swf",
		upload_url: "upload",
		file_post_name: "filedata",
		file_size_limit : "3 GB",
		file_types : "*.*",
		file_types_description : "All Files",
		file_upload_limit : 1,
		file_queue_limit : 1,
		custom_settings : {
			progressTarget : "fsUploadProgress",
			cancelButtonId : "btnCancel"
		},
		debug: false,

		// Button settings
		button_image_url: "../plugins/swfupload/font76x28.png",
		button_width: "76",
		button_height: "28",
		button_placeholder_id: "spanButtonPlaceHolder",
		//button_text: '<span class="theFont">浏览</span>',
		//button_text_style: ".theFont { font-size: 14; }",
		//button_text_left_padding: 12,
		//button_text_top_padding: 3,
		button_cursor: SWFUpload.CURSOR.HAND,
		
		// The event handler functions are defined in handlers.js
		file_queued_handler : fileQueued,
		file_queue_error_handler : fileQueueError,
		//file_dialog_complete_handler : fileDialogComplete,
		upload_start_handler : uploadStart,
		upload_progress_handler : uploadProgress,
		upload_error_handler : uploadError,
		upload_success_handler : uploadSuccess,
		upload_complete_handler : uploadComplete,
		queue_complete_handler : queueComplete	// Queue plugin event
	};
	swfu = new SWFUpload(settings);
});

//触发文件上传  HuangTing 2012-04-26
function start_upload(){
	if (swfu.getStats().files_queued > 0) {
		swfu.setPostParams({
			'categoryId': $("#categoryId").val(),
			'memo': $("#memo").val()
		});
		swfu.startUpload();
		
	} else {
		$.jGrowl('请选择要上传的文件！');
	}
}


