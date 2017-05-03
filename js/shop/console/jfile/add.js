/*!
 * add_efile 
 * 
 * 上传文件的js
 * HuangTing
 * 2012-04-26
 */

var swfu;
// 页面加载数据
$(document).ready(function() {

	// 检查SWFUpload是否可用
	if (typeof (SWFUpload) === "undefined") {
		return;
	}

	// 上传文件设置
	var setting ={
			upload_url: "upload",//http://127.0.0.1:8080/J2SHOP/shop/console/jfile/
			//post_params: {"name" : "0"},//这个要有，原因未知
			file_post_name: "filedata",
			
			// File Upload Settings
			file_size_limit : "10 MB",	// 1000MB
			//file_types : "*.*",
			file_types :"*.gif;*.jpeg;*.jpg;*.png;*.bmp;*.swf",// "*.*",
			//file_types_description : "所有文件",
			file_types_description : "图片和Flash",
			file_upload_limit : "0",
							
			file_queue_error_handler : fileQueueError,
			file_dialog_complete_handler : fileDialogComplete,//选择好文件后提交
			file_queued_handler : fileQueued,
			upload_progress_handler : uploadProgress,
			upload_error_handler : uploadError,
			upload_success_handler : uploadSuccess,
			upload_complete_handler : uploadComplete,

			// Button Settings
			button_image_url: "../../../plugins/swfupload/font76x28.png",
			button_placeholder_id : "spanButtonPlaceholder",
			button_width: "76",
			button_height: "28",
			button_text : '',
			button_text_style : '.button { font-family: Helvetica, Arial, sans-serif; font-size: 12pt; } .buttonSmall { font-size: 10pt; }',
			button_text_top_padding: 0,
			button_text_left_padding: 18,
			button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
			button_cursor: SWFUpload.CURSOR.HAND,
			
			// Flash Settings
			flash_url : "../../../plugins/swfupload/swfupload.swf",

			custom_settings : {
				upload_target : "divFileProgressContainer"
			},
			// Debug Settings
			debug: false  //是否显示调试窗口
		};
	swfu = new SWFUpload(setting);
});


function startUploadFile(){
	swfu.startUpload();
}

// 触发文件上传
function start_upload() {
	if (swfu.getStats().files_queued > 0) {
		swfu.setPostParams({
			'entityState' : $("#entityState").val(),
			'kind' : $("#kind").val(),
			'name' : "0" //这个要有，原因未知
		});
		swfu.startUpload();

	} else {
		$.jGrowl('请选择要上传的文件！');
	}
}
